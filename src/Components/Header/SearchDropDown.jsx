import Dropdown from "react-bootstrap/Dropdown";

function SearchDropDown() {
	return (
		<Dropdown>
			<div className="drop__downBasic">
				<Dropdown.Toggle variant="" id="dropdown-basic">
					All
				</Dropdown.Toggle>
			</div>

			<Dropdown.Menu className="drop__down">
				<Dropdown.Item href="#/action-1">All Departments</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Alexa Skills </Dropdown.Item>
				<Dropdown.Item href="#/action-3">Amazon Devices </Dropdown.Item>
				<Dropdown.Item href="#/action-3">Amazon Fresh </Dropdown.Item>
				<Dropdown.Item href="#/action-3">Amazon Pharmacy </Dropdown.Item>
				<Dropdown.Item href="#/action-3">Amazon Warehouse </Dropdown.Item>
				<Dropdown.Item href="#/action-3">Appliances </Dropdown.Item>
				<Dropdown.Item href="#/action-3">Apps & Games </Dropdown.Item>
				<Dropdown.Item href="#/action-3">Art, Crafts& Sewing </Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default SearchDropDown;
