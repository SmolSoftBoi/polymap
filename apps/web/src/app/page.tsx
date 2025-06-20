import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FeatureHighlights } from '../components/FeatureHighlights';
import { HowItWorks } from '../components/HowItWorks';

/** Landing page component. */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-16 p-8 sm:p-20">
      <Header title="Polymap" />
      <main className="flex flex-1 flex-col items-center gap-12">
        <h1 className="text-center text-4xl font-bold">
          Visualize your networks effortlessly 🚀
        </h1>
        <FeatureHighlights
          features={[
            { icon: '🗺️', text: 'Interactive maps' },
            { icon: '📡', text: 'Real-time updates' },
            { icon: '☁️', text: 'Cloud sync' },
          ]}
        />
        <HowItWorks
          steps={[
            {
              icon: '1️⃣',
              title: 'Add connections',
              description: 'Upload your nodes and links.',
            },
            {
              icon: '2️⃣',
              title: 'Explore',
              description: 'Navigate the interactive graph.',
            },
            {
              icon: '3️⃣',
              title: 'Share',
              description: 'Collaborate with your team.',
            },
          ]}
        />
        <Link
          className="rounded-full bg-foreground px-5 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          href="/demo"
        >
          Try the demo
        </Link>
      </main>
      <Footer links={[{ href: '/privacy', label: 'Privacy' }, { href: '/terms', label: 'Terms' }]} />
    </div>
  );
}
