import React from 'react'
import {Button} from 'react-bootstrap';
import TypePopover from '../../../../modules/TypePopover';
import DatePicker from '../../../../modules/DatePicker';
import SelectBox from '../../../../modules/SelectBox';
import './DateChange.css'

const HeaderDate = React.createClass({
    render: function () {
       return (
            <TypePopover popoverId="headerPopover" popoverIcon="fa fa-filter">
              <div className="col-sm-12 p-0">
                <div id="headerFilterDate" className="col-sm-6 p-0">
                  <DatePicker inlineStyle="inline"/>
                </div>
                <div id="headerFilterDate" className="col-sm-6 p-0">
                  <DatePicker inlineStyle="inline"/>
                </div>
                <div id="headerCountrySelect" className="col-sm-6 p-0">
                  <SelectBox/>
                </div>
                <div id="headerCountryBrand" className="col-sm-6 p-0">
                  <SelectBox/>
                </div>
                <div id="headerFilterButtonCancel" className="col-sm-6 p-0">
                  <Button className="w-100">CANCEL</Button>
                </div>
                <div id="headerFilterButtonOk" className="col-sm-6 p-0">
                  <Button className="w-100" bsStyle="primary">OK</Button>
                </div>
              </div>
            </TypePopover>
        );
    }
});
export default HeaderDate;
