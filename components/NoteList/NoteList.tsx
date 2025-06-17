import { Note } from "@/app/lib/api";
import NoteItem from "../NoteItem/NoteItem";

type Props = {
  notes: Note[];
};

export default function NoteList({ notes }: Props) {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem item={note} key={note.id} />
      ))}
    </ul>
  );
}
