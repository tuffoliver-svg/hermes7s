# Hermès McKinsey 7S Explorer

An interactive web application for exploring organizational alignment using the McKinsey 7S framework, applied to Hermès as a case study.

Created by Ollie Tuff

## About

This project visualizes how the seven elements of the McKinsey 7S framework—Strategy, Structure, Systems, Shared Values, Style, Skills, and Staff—align within Hermès, the luxury fashion house. The framework demonstrates how organizational effectiveness depends on the alignment of these interdependent elements.

## Features

- **Interactive 7S Diagram**: Central hub displaying all seven elements with individual scores and connections
- **Detailed Element Pages**: In-depth analysis of each S element with narrative descriptions
- **Cross-Element Alignment**: Explore how any two S elements interact and align with detailed explanations
- **Scrollable Content**: Accommodates extensive organizational analysis with smooth scrolling
- **Luxury Brand Aesthetic**: Styled with Hermès' signature orange and cream color palette
- **Responsive Design**: Optimized for all screen sizes

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Fonts**: Custom serif and sans-serif typography

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
├── app/
│   ├── page.tsx          # Main dashboard with 7S diagram
│   ├── s/[id]/page.tsx   # Individual S element detail pages
│   └── globals.css       # Global styles and theme
├── components/
│   ├── CircularNode.tsx  # Interactive circular S elements
│   ├── AlignmentSelect.tsx   # Dropdown for selecting alignments
│   ├── AlignmentResult.tsx   # Display alignment analysis
│   └── ui/               # Reusable UI components
├── data/
│   └── 7sData.ts         # Content and alignment data
└── lib/
    └── utils.ts          # Utility functions
```

## Key Insights

The application demonstrates key organizational principles:

- **Shared Values as Core**: Hermès' values of craftsmanship and heritage drive all other elements
- **Alignment Scores**: Quantifies how well elements work together (1-10 scale)
- **Strategic Coherence**: Shows how luxury differentiation requires alignment across all seven elements
- **Cultural Integration**: Illustrates the role of organizational culture in operational excellence

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## License

This project is created for educational and analytical purposes.
