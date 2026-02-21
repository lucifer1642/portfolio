import { Metadata } from 'next';
import { PROJECTS } from '@/lib/constants';
import { ProjectPageLayout } from '@/components/projects/ProjectPageLayout';

const project = PROJECTS.find((p) => p.slug === 'rakshak')!;

export const metadata: Metadata = {
    title: `${project.title} — ${project.tagline} | Ashwini Kumar Kar`,
    description: project.description,
    openGraph: {
        title: project.title,
        description: project.description,
        type: 'article',
    },
};

export default function RakshakPage() {
    return <ProjectPageLayout project={project} />;
}
