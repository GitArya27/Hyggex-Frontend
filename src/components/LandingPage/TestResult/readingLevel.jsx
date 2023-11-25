import React, { useState } from 'react';

const ReadingLevel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const Levels = ['Level 1: Sprouting Reader', 'Level 2: Budding Reader:', 'Level 3: Blooming', 'Level 4: Flourishing Reader'];

    const accordionTexts = [
        { title: "Sprouting Reader", content: "As a 'Sprouting Reader', you are at the beginning of your journey towards becoming a skilled reader. At this stage, every text you read has the potential to help you grow and develop your understanding. You'll encounter complex sentences and intricate plots that may require you to slow down, think carefully about the meaning, and take in all the details. You may need to reread lines or paragraphs to make sure you understand them, but this extra effort will help you improve your comprehension and foster a love for reading. Reading at this level requires concentration and effort, just like a young plant needs support to grow straight and tall. You'll need to maintain focus amidst the hustle and bustle of everyday life, much like a young shoot needs support to stand up straight. But by taking your time and reading carefully, you'll get the most out of the text and help yourself understand it better. You'll learn to read between the lines, pick up on subtle hints and nuances, and develop a deeper appreciation for the author's craft. As you read, you'll gradually get better at remembering what you have read and using that knowledge for your own thoughts and discussions. This is a process akin to photosynthesis, where you take in information and transform it into energy for thought and discussion. You'll learn to make connections between different texts, recognize patterns and themes, and develop your own unique perspective on the world.  To get the most out of your reading, it's a good idea to read a variety of genres, just like a diverse garden is more beautiful than a single type of flower. You can explore different genres like fiction, non-fiction, poetry, and more, each with their own unique characteristics and challenges. You can also use tools like highlighters, tabs, and notes to mark important sections of the text and help you remember them. Sharing your thoughts and ideas about what you have read can also help you remember and understand the text better. You'll learn to express yourself clearly and thoughtfully, and develop your own voice as a reader and thinker. Make reading a consistent part of your daily routine to help you build a strong habit. This means setting aside time each day to read, even if it's just for a few minutes. You can also use mindfulness techniques to help you focus and avoid distractions, like finding a quiet place to read or using noise-cancelling headphones. By cultivating a strong reading habit, you'll develop a lifelong love of reading that will serve you well in all areas of life. Remember that every word you learn, every theme you explore, and every book you finish is a victory. The literary world is full of opportunities for discovery and learning, so keep reading and growing!" },
        { title: "Budding reader", content: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have" },
        { title: "Bloom", content: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software." },
        { title: "Flourishing", content: "The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.." }
    ];

    const LevelStyles = [
        { backgroundColor: '#A6C1F9', color: '#06286E' }, // Level 1 styles
        { backgroundColor: '#5085F3', color: '#ffffff' }, // Level 2 styles
        { backgroundColor: '#164EC0', color: '#ffffff' }, // Level 3 styles
        { backgroundColor: '#06286E', color: '#ffffff' }, // Level 4 styles
    ];

    const handleLevel = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div className=' flex border border-solid border-blue-900'>
                <div className='flex w-[30%]'>
                    <div className='flex flex-col w-[92%] h-full'>
                        {Levels.map((item, index) => (
                            <div
                                key={index}
                                className='flex flex-col justify-center items-center text-xs font-semibold p-8 bg-[#A6C1F9] h-[25%] text-blue-900'
                                onClick={() => handleLevel(index)}
                                style={LevelStyles[index]}
                            >
                            {item}
                            </div>
                        ))}

                    </div>
                    <div className='flex flex-col h-full w-[8%]'>
                        <span className='bg-[#007765] h-[22%]'></span>
                        <span className='bg-[#263238] h-[78%]'></span>
                    </div>
                </div>
                <div className='w-[70%] h-full flex flex-col px-12 py-16 items-start justify-center'>
                    <h3 className='text-blue-900 font-bold text-l pb-2'>{accordionTexts[activeIndex].title}</h3>
                    <p className='text-[15px] text-blue-900'>{accordionTexts[activeIndex].content}</p>
                </div>
            </div>
        </div>
    );
};

export default ReadingLevel;
