"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Star } from "lucide-react";

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

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({
  project,
}: ProjectDetailClientProps) {
  const router = useRouter();
  const [rating, setRating] = useState<number | null>(null);

  const handleRating = (value: number) => {
    setRating(value);
    alert(`You rated this project ${value} stars!`); // Replace with actual API call if needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          className="mb-8 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100"
          onClick={() => router.push("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <Card className="bg-white dark:bg-gray-800 border border-purple-100 dark:border-purple-900">
          <CardHeader className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16 border-2 border-purple-200 dark:border-purple-700">
                <AvatarImage src={project.image} alt={project.name} />
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-purple-800 dark:text-purple-300">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  by {project.name}
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300"
            >
              {project.category}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-purple-200 dark:border-purple-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Rating Section */}
            <div>
              <h2 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Rate this Project
              </h2>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-6 w-6 cursor-pointer ${
                      star <= (rating || 0)
                        ? "text-yellow-500"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                    onClick={() => handleRating(star)}
                  />
                ))}
              </div>
              {rating && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  You rated this project {rating} star{rating > 1 ? "s" : ""}.
                </p>
              )}
            </div>

            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
              onClick={() => window.open(project.projectUrl, "_blank")}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Project
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
