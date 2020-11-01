import React from 'react';

class ZfgcForm extends React.Component {

	getState(){
		return this.state;
	}

	initForm(viewModel){
		this.setState({vm : viewModel});
	}

	changeField(control, field){
		let vm = this.state.vm;
		let children = field.split(".")
		let fieldToWrite = null;
		let temp = vm;

		for(let i = 1; i < children.length1; i++){
			temp = temp[children[i]];
		}

		temp[children[children.length - 1]] = control.target.value;
		this.setState(this.state);
	}

	renderSelectOptions(lookups, lookupName){
		let items = [];

		if(lookups && lookups !== null){
			for(let lkup of lookups[lookupName]){
				items.push(<option value={lkup.id}>{lkup.value}</option>);
			}
		}

		return items;
	}

}

export default ZfgcForm;