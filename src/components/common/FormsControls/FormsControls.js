import c from './FormsControls.module.css';

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${c.formControl} ${hasError && c.error}`}>
            <Element className={c.inputField} {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}