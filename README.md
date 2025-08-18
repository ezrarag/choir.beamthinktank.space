# BEAM Choir & Vocal Arts Foundation

A Next.js website for the BEAM Choir & Vocal Arts Foundation, supporting gospel, classical, opera, and contemporary vocal arts through community concerts, music education, and facility development.

## Features

- **City Selector**: Filter choir groups by city (gospel, classical, opera, contemporary)
- **Donation Integration**: Stripe-powered donation system with impact tracking
- **Choir Showcase**: Display choir performances, vocal training, and city ensembles
- **Fund Thresholds**: Visual progress tracking for community concerts, music education, and facility development
- **Supabase Integration**: Database for NGO metadata, choir projects, and donation tracking
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Payments**: Stripe
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd beam-choir-foundation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

### Supabase Tables

Create the following tables in your Supabase database:

#### choir_groups
```sql
CREATE TABLE choir_groups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('gospel', 'classical', 'opera', 'contemporary')),
  description TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### donations
```sql
CREATE TABLE donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  amount DECIMAL(10,2) NOT NULL,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  message TEXT,
  city TEXT,
  choir_type TEXT,
  status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### projects
```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  target_amount DECIMAL(10,2) NOT NULL,
  current_amount DECIMAL(10,2) DEFAULT 0,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'in-progress', 'completed')),
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Stripe Setup

1. Create a Stripe account and get your API keys
2. Set up webhook endpoints for payment confirmation
3. Configure your Stripe dashboard for donations

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── CitySelector.tsx   # City filter
│   ├── ChoirShowcase.tsx  # Choir display
│   ├── DonationSection.tsx # Donation form
│   ├── FundThresholds.tsx # Progress tracking
│   └── Footer.tsx         # Site footer
├── lib/                    # Utility libraries
│   ├── supabase.ts        # Supabase client
│   └── stripe.ts          # Stripe configuration
├── public/                 # Static assets
└── package.json            # Dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@beamchoir.org
- Phone: (555) 123-4567

## Roadmap

- [ ] User authentication and profiles
- [ ] Choir member registration
- [ ] Event calendar and ticketing
- [ ] Music education course platform
- [ ] Mobile app development
- [ ] International expansion
