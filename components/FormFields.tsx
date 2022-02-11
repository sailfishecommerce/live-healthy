interface InputProps {
  formContent: {
    className: string;
    placeholder: string;
    type: string;
  };
}

interface TextAreaProps {
  formContent: {
    rows?: number;
    className: string;
    placeholder: string;
    type: string;
  };
}

export function TextArea({ formContent }: TextAreaProps) {
  return (
    <div className={formContent.className}>
      <textarea
        className="form-control"
        rows={formContent.rows}
        placeholder={formContent.placeholder}
        required
      ></textarea>
    </div>
  );
}

export function Input({ formContent }: InputProps) {
  return (
    <div className={formContent.className}>
      <input
        className="form-control"
        type={formContent.type}
        placeholder={formContent.placeholder}
        required
      />
    </div>
  );
}
