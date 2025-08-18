import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')
    const type = searchParams.get('type')

    let query = supabase.from('choir_groups').select('*')

    if (city && city !== 'all') {
      query = query.eq('city', city)
    }

    if (type && type !== 'all') {
      query = query.eq('type', type)
    }

    const { data, error } = await query.order('name')

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch choir groups' },
        { status: 500 }
      )
    }

    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Choirs API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
