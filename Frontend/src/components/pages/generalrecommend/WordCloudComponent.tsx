import styled from "styled-components";
import { Text } from "@visx/text";
import { scaleLog } from "@visx/scale";
import { Wordcloud } from "@visx/wordcloud";

const WordCloudContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  background-color: #ffffff;
  border-radius: 50%;
  svg {
    margin: 1rem 0;
    font-weight: 500;
  }
  label {
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    margin-right: 8px;
  }
`;

interface ExampleProps {
  width: number;
  height: number;
  showControls?: boolean;
}

export interface WordData {
  text: string;
  value: number;
}

const totoAfricaLyrics = `I hear the drums echoing tonight
But she hears only whispers of some quiet conversation
She's coming in, 12:30 flight
The moonlit wings reflect the stars that guide me towards salvation`;

const colors = ["#143059", "#43597A", "#72839B", "#A1ACBD"];

function wordFreq(text: string): WordData[] {
  const words: string[] = text.split(/\s/); // split by whitespace
  const freqMap: Record<string, number> = {}; // create a map for word frequency

  for (const w of words) {
    // count the frequency of each word
    if (!freqMap[w]) freqMap[w] = 0; // initialize the word count
    freqMap[w] += 1; // increment the word count
  }
  return Object.keys(freqMap).map((word) => ({
    // create an array of word data
    text: word, // the word itself
    value: freqMap[word], // the frequency of the word
  }));
}

// function getRotationDegree() {
//   const rand = Math.random();
//   const degree = rand > 0.5 ? 60 : -60;
//   return rand * degree;
// }

const words = wordFreq(totoAfricaLyrics);

const fontScale = scaleLog({
  domain: [
    Math.min(...words.map((w) => w.value)),
    Math.max(...words.map((w) => w.value)),
  ],
  range: [20, 250],
});
const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

// const spiralType =  ((size: [number, number]) => (t: number) => [5, 5]);
// const logarithmicSpiral =
//   (size: [number, number]) =>
//   (t: number): [number, number] => {
//     const a = 5; // 스파이럴의 초기 반지름 (조정 가능)
//     const b = 0.3; // 스파이럴이 얼마나 빠르게 커지는지 조절 (조정 가능)
//     const r = a * Math.exp(b * t);
//     const aspectRatio = size[0] / size[1];
//     return [
//       (aspectRatio * r * Math.cos(t)) / 2, // x 좌표
//       (r * Math.sin(t)) / 2, // y 좌표
//     ];
//   };

const fixedValueGenerator = () => 0.5;

function Example({ width, height, showControls }: ExampleProps) {
  return (
    <WordCloudContainer>
      <Wordcloud
        words={words}
        width={width}
        height={height}
        fontSize={fontSizeSetter}
        // font={"Source Sans Pro"}
        padding={1}
        spiral={"archimedean"}
        rotate={0}
        random={fixedValueGenerator}
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={"middle"}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
            >
              {w.text}
            </Text>
          ))
        }
      </Wordcloud>
    </WordCloudContainer>
  );
}

export default Example;
