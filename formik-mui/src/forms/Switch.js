import React from 'react';
import MuiSwitch from '@material-ui/core/Switch';
import formikToMuiProps from '../forms/formikToMuiProps';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


const styles = () => ({
	inputType: {
		height: '23px', // to ensure the match with react-select
	},
});

class Switch extends React.PureComponent {
	constructor(p) {
		super(p);
		this.handleChange = this.handleChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}
	handleChange(event) {
  	if (this.props.field) this.props.field.onChange(event);
  	if (this.props.onChange) this.props.onChange(event);
	}
	handleBlur(event) {
  	if (this.props.field) this.props.field.onBlur(event);
  	if (this.props.onBlur) this.props.onBlur(event);
	}
	render() {
  	const {fullWidth = true, classes, inputProps = {}, label, compact, ...props} = this.props; // eslint-disable-line no-unused-vars
		inputProps.classes = {...classes, ...inputProps.classes};

		const {error = false, helperText, ...fp} = formikToMuiProps(props);
  	return <FormControl fullWidth={fullWidth}>
  		<FormControlLabel
				control={
					<MuiSwitch
						{...fp}
						onChange={this.handleChange}
						onBlur={this.handleBlur}
					/>
				}
				label={label}
			/>
			{helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
  	</FormControl>;
	}
}
Switch.displayName = 'FormikMaterialUISwitch';

export default withStyles(styles)(Switch);