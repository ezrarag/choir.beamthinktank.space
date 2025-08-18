import { NextRequest, NextResponse } from 'next/server'
import { createCheckoutSession } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { amount, donorName, donorEmail, message, city, choirType } = await request.json()

    if (!amount || !donorName || !donorEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create Stripe checkout session
    const session = await createCheckoutSession(amount, {
      donorName,
      donorEmail,
      message,
      city,
      choirType,
    })

    // Store donation record in Supabase (pending)
    const { error: supabaseError } = await supabase
      .from('donations')
      .insert({
        amount,
        donor_name: donorName,
        donor_email: donorEmail,
        message,
        city,
        choir_type: choirType,
        status: 'pending',
        stripe_session_id: session.id,
      })

    if (supabaseError) {
      console.error('Supabase error:', supabaseError)
    }

    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Donation API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
