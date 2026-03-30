// src/types/event.ts
export interface EditorEvent {
  timestamp: number;
  eventType: string;
  fileName: string;
  cursorPosition: number;
  content: string;
}