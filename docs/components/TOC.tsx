import {Card, Cards} from 'nextra-theme-docs';

interface Props {
  base: string;
  meta: Record<string, string>;
}

export const TOC = ({base, meta}: Props): React.JSX.Element => {
  return (
    <Cards>
      {Object.entries(meta).map(([key, value]) => (
        <Card
          key={key}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          }
          title={value}
          href={`${base}/${key}`}
        >
          {' '}
        </Card>
      ))}
    </Cards>
  );
};
