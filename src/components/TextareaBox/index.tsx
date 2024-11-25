import styled from "styled-components";
import styles from "./styles.module.scss";

// styled-components로 만든 Textarea
const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
`;

interface TextareaBoxProps {
  value: string; // value를 props로 받아옵니다.
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // onChange 핸들러 추가
  placeholder?: string;
}

export default function TextareaBox({ value, onChange }: TextareaBoxProps) {
  return (
    <div className={styles.container}>
      <Textarea
        value={value}
        onChange={onChange}
        placeholder={"css 입력 ㄱㄱ"}
      ></Textarea>
    </div>
  );
}
