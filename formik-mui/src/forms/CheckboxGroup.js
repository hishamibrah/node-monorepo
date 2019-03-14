import React, {Fragment} from 'react';
import cx from 'classnames';

import Checkbox from '../forms/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import {connect, getIn} from 'formik';
import withStyles from '@material-ui/core/styles/withStyles';
import formControl from '../styles/formControl';
import formLabel from '../styles/formLabel';

const styles = {
	formControlCompact: formControl.compact,
	formControlNormal: formControl.normal,
	formLabel,
};

class CheckboxGroup extends React.Component {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event, v) {
  	const {name, value = [], formik: {setFieldValue} = {}, onChange} = this.props;

  	const target = event.currentTarget;
  	let valueArray = [...value] || [];

  	if (target.checked) valueArray.push(v);
  	else valueArray.splice(valueArray.indexOf(v), 1);
		if (setFieldValue) setFieldValue(name, valueArray);
		if (onChange) onChange(valueArray);
	}
	handleBlur() {
		// take care of touched
		if (this.props.field) this.props.formik.setFieldTouched(this.props.field.name, true);
	}
	render() {
  	let {
  		name,
  		formik: {errors, values, touched, dirty} = {},
  		options,
  		label,
  		compact,
			FormControlProps: {classes: fClasses = {}, ...FormControlProps} = {},
  		FormLabelProps,
  		FormHelperTextProps = {},
  		CheckboxProps,
  		FormGroupProps,
			classes,
			Field = Fragment,
			value,
			error,
  		...props
  	} = this.props;

  	value = value || getIn(values, name) || [];
  	error = error || getIn(errors, name);
		const errStr = (dirty || getIn(touched, name) && typeof error === 'string' ? error : null);
  	const helperText = errStr || props.helperText;

  	return (
  		<FormControl
  			error={Boolean(errStr)}
  			{...FormControlProps}
				classes={{...fClasses, root: cx(fClasses.root, classes[`formControl${compact ? 'Compact' : 'Normal'}`])}}
  		>
  			{label && (
  				<FormLabel
  					{...FormLabelProps}
  					classes={{...(FormLabelProps || {}).classes, ...(compact ? {root: classes.formLabel} : {})}}
  				>
						{label}
						{helperText && (
							<FormHelperText
								{...FormHelperTextProps}
								error={error}
								className={FormHelperTextProps.className}
							>
								{helperText}
							</FormHelperText>
						)}
  				</FormLabel>
  			)}
  			<FormGroup {...FormGroupProps} row={(FormGroupProps || {}).row || compact}>
  				{options.map((option, i) => (
  					<Field key={i}
  						name={name}
  						{...props}
  					>
  						{({form}) => (
  							<Checkbox
  								{...option}
  								{...CheckboxProps}
  								name={name}
  								checked={value.includes(option.value)}
  								onChange={() => {
  									if (value.includes(option.value)) {
  										const nextValue = value.filter(v => v !== option.value);
  										form.setFieldValue(name, nextValue);
  									}
 										else {
  										const nextValue = value.concat(option.value);
  										form.setFieldValue(name, nextValue);
  									}
  								}}
  								onBlur={this.handleBlur}
  							/>
  						)}
  					</Field>
  				))}
  			</FormGroup>
  		</FormControl>
  	);
	}
}

export default withStyles(styles)(connect(CheckboxGroup));
