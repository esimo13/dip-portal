"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface Project {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  category: string;
  detailedDescription: string;
  technologies: string[];
  projectUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  return (
    <Card
      className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900"
      onClick={() => router.push(`/project/${project.id}`)}
    >
      <CardHeader className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12 border-2 border-purple-200 dark:border-purple-700">
            <AvatarImage src={project.image} alt={project.name} />
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg text-purple-800 dark:text-purple-300">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.name}</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300">
          {project.category}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs border-purple-200 dark:border-purple-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}