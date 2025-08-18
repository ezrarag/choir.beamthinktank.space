import { NextRequest, NextResponse } from 'next/server'
// import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Temporarily disabled - return mock data for build
    // if (!supabase) {
    //   return NextResponse.json(
    //     { error: 'Database not configured' },
    //     { status: 503 }
    //   )
    // }

    const { searchParams } = new URL(request.url)
    const city = searchParams.get('city')
    const type = searchParams.get('type')

    // Mock data for now - replace with Supabase when configured
    const mockChoirs = [
      { id: '1', name: 'Harlem Gospel Choir', city: 'New York', type: 'gospel', description: 'Traditional gospel music with contemporary flair' },
      { id: '2', name: 'Boston Classical Ensemble', city: 'Boston', type: 'classical', description: 'Professional classical vocal performances' },
      { id: '3', name: 'Chicago Opera Chorus', city: 'Chicago', type: 'opera', description: 'Operatic excellence in the Windy City' },
      { id: '4', name: 'LA Contemporary Voices', city: 'Los Angeles', type: 'contemporary', description: 'Modern vocal arrangements and compositions' },
    ]

    let filteredChoirs = mockChoirs

    if (city && city !== 'all') {
      filteredChoirs = mockChoirs.filter(choir => choir.city.toLowerCase().includes(city.toLowerCase()))
    }

    if (type && type !== 'all') {
      filteredChoirs = filteredChoirs.filter(choir => choir.type === type)
    }

    return NextResponse.json(filteredChoirs)
  } catch (error) {
    console.error('Choirs API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
