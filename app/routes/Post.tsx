import type { Route } from "./+types/Post";

export function meta({ params }: Route.MetaArgs) {
   return [
      { title: `Post ${params.postId}` },
      { name: "description", content: `Post ${params.postId}` },
   ];
}