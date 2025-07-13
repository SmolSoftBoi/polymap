import Link from 'next/link';
import { FeatureHighlights } from '../components/FeatureHighlights';
import { HowItWorks } from '../components/HowItWorks';
import { Demo } from '@/components/Demo';

/** Landing page component. */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center gap-12">
      <section className="hero">
        <h1 className="text-center text-4xl font-bold">
          Visualise Your polycule. Share With Ease. 🚀
        </h1>
        <p>A privacy-first way to map, understand, and celebrate your unique constellation of relationships.</p>
        <Demo />
      </section>
      <FeatureHighlights
        features={[
          { icon: '🛠️', text: 'Drag & Drop Editor' },
          { icon: '🔒', text: 'Privacy-first' },
          { icon: '🖼️', text: 'Export' },
          { icon: '🤝', text: 'Collaboration' },
        ]}
      />
      <HowItWorks
        steps={[
          {
            icon: '1️⃣',
            title: 'Start your map',
          },
          {
            icon: '2️⃣',
            title: 'Add connections',
          },
          {
            icon: '3️⃣',
            title: 'Customise & share',
          },
        ]}
      />
      <Link
        className="rounded-full px-5 py-3 transition-colors hover:opacity-90"
        href="/demo"
      >
        Try the demo
      </Link>
    </main>
  );
}
