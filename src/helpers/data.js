export const formatDataToFetch = (topic, level)=> {
    topic = topic.replaceAll(' ', '_').toLowerCase();
    level = level.replaceAll(' ', '_').toLowerCase();

    return { topic, level };
}

export async function fetchQuestions(topic, level, setError, setQuestions) {
    const URL = `https://the-trivia-api.com/v2/questions?limit=20&types=text_choice&categories=${topic}&difficulties=${level}`;

    try {
        const res = await fetch(URL);

        if(!res.ok) {
            throw new Error();
        }

        const questions = await res.json();
        setQuestions(questions);

    } catch (error){
        const mess = error.message || 'Failed to load questions';
        setError(mess)
    }
}
