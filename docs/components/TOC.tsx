import { Card, Cards } from 'nextra-theme-docs';

interface Props {
  base: string;
  meta: Record<string, string>;
}

export const TOC = ({ base, meta }: Props): React.JSX.Element => {
  return (
    <Cards>
      {Object.entries(meta).map(([key, value]) => (
        <Card
          href={`${base}/${key}`}
          key={key}
          title={value}
          icon={
            <svg
              className="h-6 w-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        >
          {' '}
        </Card>
      ))}
    </Cards>
  );
};
