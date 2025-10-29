import { NextRequest, NextResponse } from "next/server";

const authors = [
  "Jane Austen",
  "Mark Twain",
  "Virginia Woolf",
  "Ernest Hemingway",
  "Maya Angelou",
  "Gabriel García Márquez",
  "Toni Morrison",
  "James Joyce",
];

const genres = [
  "Fiction",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Thriller",
  "Historical Fiction",
  "Literary Fiction",
];

const sampleTexts = [
  "In the depths of winter, I finally learned that within me there lay an invincible summer. The journey through the darkest nights taught me lessons that no teacher could impart.",
  "Time moves differently in the quiet moments between heartbeats. It stretches and contracts like a living thing, reminding us that every second is precious.",
  "The old house stood at the edge of the forest, its windows like eyes watching the passage of seasons. Each year brought new stories to its weathered walls.",
  "She walked through the garden at dawn, when the world was still painted in shades of blue and grey. The flowers were just beginning to wake, stretching towards the light.",
  "The city never truly sleeps, it merely closes its eyes for a moment. In those quiet hours, secrets whisper through empty streets and dreams take flight.",
  "Mountains remember everything. They hold the stories of ancient peoples, the songs of forgotten winds, and the promises made under starlit skies.",
  "Books have a way of finding their readers. They wait patiently on dusty shelves, knowing that someday the right person will discover them.",
  "The ocean speaks in a language older than words. Its rhythm carries the memory of countless voyages and the dreams of those who dared to sail beyond the horizon.",
];

function generateRandomText(characters: number): string {
  const baseText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
  let text = baseText;

  while (text.length < characters) {
    text += " " + sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
  }

  return text.substring(0, characters);
}

export async function GET(request: NextRequest) {
  console.log("fetching");
  const searchParams = request.nextUrl.searchParams;
  const quantity = parseInt(searchParams.get("quantity") || "1");
  const characters = parseInt(searchParams.get("characters") || "200");

  const timeoutByIndex = (index: number) =>
    new Promise((resolve) => setTimeout(resolve, index * 1000));

  for (let i = 0; i < quantity; i++) {
    await timeoutByIndex(i);
    console.log(`Processed item ${i + 1}`);
  }

  const data = Array.from({ length: quantity }, (_, index) => ({
    title: `Story ${index + 1}: ${
      ["The Journey", "Midnight Tales", "Whispers", "Echoes", "Reflections"][
        Math.floor(Math.random() * 5)
      ]
    }`,
    author: authors[Math.floor(Math.random() * authors.length)],
    genre: genres[Math.floor(Math.random() * genres.length)],
    content: generateRandomText(characters),
  }));

  return NextResponse.json({
    status: "OK",
    code: 200,
    total: data.length,
    data,
  });
}
