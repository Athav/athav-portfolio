import { useEffect, useState } from "react";

// Types a word, pauses, deletes it, then moves to the next one
export default function useTyping(words: readonly string[]): string {
    const [text, setText] = useState("");
    const [i, setI] = useState(0);
    const [del, setDel] = useState(false);

    useEffect(() => {
        const w = words[i % words.length];
        const t = setTimeout(() => {
            if (!del) {
                setText(w.slice(0, text.length + 1));
                if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1200);
            } else {
                setText(w.slice(0, text.length - 1));
                if (text.length - 1 === 0) { setDel(false); setI(i + 1); }
            }
        }, del ? 40 : 80);
        return () => clearTimeout(t);
    }, [text, del, i, words]);

    return text;
}
