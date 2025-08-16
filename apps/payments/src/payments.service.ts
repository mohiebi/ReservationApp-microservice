import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { number } from 'joi';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private readonly stripe: Stripe;

  constructor(private readonly configService : ConfigService){
    this.stripe = new Stripe(
      this.configService.get<string>('STRIPE_SECRET')!,
      {
        apiVersion: '2025-07-30.basil',
      }
    );
  }

  async createCharge(card: Stripe.PaymentMethodCreateParams.Card, amount: number) {
    const paymentMethod = await this.stripe.paymentMethods.create({
      type: 'card',
      card,
    });

    const paymentIntent = await this.stripe.paymentIntents.create({
      payment_method: paymentMethod.id,
      amount: amount * 100,
      confirm: true,
      payment_method_types: ['card'],
      currency: 'usd',
    });

    return paymentIntent;
  }
}
