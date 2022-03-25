import c from './FormsControls.module.css';
import {Field, reduxForm} from 'redux-form';

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={`${c.formControl} ${hasError && c.error}`}>
            <Element className={c.inputField} {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const createField = (placeholder, name, validators, component, props={}, isLabel=false, text='') => (
    <div>
        {isLabel && <label htmlFor={props.id}>{text}</label>}
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/>
    </div>
)