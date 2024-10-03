export default {
	inputs:[],
	test_increment: 0,
	unique_list:[],
	
	
	
	//function testing
	func_testing:async()=>{
		//pass...
		
	},
	
	//widget testing
	add_data_to_widget:async(list_of_inputtype,  no_of_test = 5)=>{
		//freeze the default value depends on the table - input 1 -> current_test_name -> type:string
		//get the column types in a list in order to generate a default input depends on the column - input 2 -> column type-> type:list
		//
		this.inputs=[]
		if(this.test_increment<no_of_test){
			this.test_increment = this.test_increment+1
		for(let i=0;i<list_of_inputtype.length;i++){
			switch(list_of_inputtype[i])
				{
					case 'name':
						this.inputs.push(chance.name());
						break;
					case 'email':
						this.inputs.push(chance.email());
						break;
					case 'bool':
						this.inputs.push(chance.bool());
						break;
				}
		}
		if(this.test_increment==1){
			this.unique_list = this.inputs
		}
		}else{
			this.inputs = this.unique_list
		}
		
	},
	check_function:()=>{
		this.add_data_to_widget(['name','email','bool'])
		
		return this.inputs
	}
	
	
}