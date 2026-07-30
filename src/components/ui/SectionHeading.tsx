import { SectionHeadingProps } from "../../types";

export const SectionHeading = ({ tag, children, id }: SectionHeadingProps) => (
  <div className="mb-12">
    {tag && (
      <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-3 font-body">
        {tag}
      </p>
    )}
    <h2
      id={id}
      className="text-3xl sm:text-4xl font-heading font-bold text-white leading-tight"
    >
      {children}
    </h2>
  </div>
);
