import { guid } from '../base/Utils';
import ComboBox from "../base/components/ComboBox";

export default class RoleComboBox {

  constructor(options) {

    var _this = this;

    this.id = guid();

    var typeList = [
      {id: 'HO', nama: "Head Office"},
      {id: 'PRJ', nama: "Project"},

    ];
    var comboBoxOptions = {
      displayMember: "nama",
      valueMember: "id",
      selectedIndex: 0,
      width: options.width,
      height: 25,
      theme: 'metro',
      selectionMode: 'dropDownList'
    };

    this.comboBox = new ComboBox({
      localData: typeList,
      value: options.value,
      comboBoxOptions: comboBoxOptions,
      onChange: function(value){
        if(options.onChange){
          options.onChange(value);
        }
      }
    });

  }

  getId(){
    return this.comboBox.getId();
  }

  render(container){
    this.comboBox.render(container);
  }

  getValue(){
    return this.comboBox.getValue();
  }

}
