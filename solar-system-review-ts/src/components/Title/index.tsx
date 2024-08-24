type TitleProp = {
  children: React.ReactNode,
}

function Title({ children }: TitleProp) {
  return (
    <h2>{ children }</h2>
  );
};

export default Title;
