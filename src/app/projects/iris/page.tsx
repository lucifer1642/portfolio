import { Metadata } from 'next';
import { PROJECTS } from '@/lib/constants';
import { ProjectPageLayout } from '@/components/projects/ProjectPageLayout';

const project = PROJECTS.find((p) => p.slug === 'iris')!;

export const metadata: Metadata = {
    title: `${project.title} — ${project.tagline} | Ashwini Kumar Kar`,
    description: project.description,
    openGraph: {
        title: project.title,
        description: project.description,
        type: 'article',
    },
};

export default function IrisPage() {
    return <ProjectPageLayout project={project} />;
}
