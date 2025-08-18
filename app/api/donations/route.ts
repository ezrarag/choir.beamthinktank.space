import { NextRequest, NextResponse } from 'next/server'
// import { createCheckoutSession } from '@/lib/stripe'
// import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Temporarily disabled - return mock response for build
    // if (!supabase) {
    //   return NextResponse.json(
    //     { error: 'Database not configured' },
    //     { status: 503 }
    //   )
    // }

    const { amount, donorName, donorEmail, message, city, choirType } = await request.json()

    if (!amount || !donorName || !donorEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Mock response for now - replace with Stripe when configured
    const mockSession = {
      id: 'mock_session_' + Date.now(),
      url: 'https://example.com/checkout?mock=true'
    }

    // Mock database insert - replace with Supabase when configured
    console.log('Mock donation:', { amount, donorName, donorEmail, message, city, choirType })

    return NextResponse.json({ 
      sessionId: mockSession.id, 
      url: mockSession.url,
      message: 'Mock donation processed - Stripe integration pending'
    })
  } catch (error) {
    console.error('Donation API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
