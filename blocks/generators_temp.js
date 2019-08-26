Blockly.JavaScript["ky_001_temp_block"] = function(block) {
    var text_ky_001_temp_pin = block.getFieldValue("KY_001_TEMP_PIN");
    var variable_ky_001_temp_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("KY_001_TEMP_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `

	#EXTINC
	#include <OneWire.h>
	#include <DallasTemperature.h>
	#END

    #VARIABLE

	// Data wire is plugged into pin 2 on the Arduino
	#define ONE_WIRE_BUS ${text_ky_001_temp_pin}

	// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
	OneWire oneWire(ONE_WIRE_BUS);
	// Pass our oneWire reference to Dallas Temperature. 
	DallasTemperature sensors(&oneWire);
	#END

	#SETUP
	  // Start up the library
	  sensors.begin(); // IC Default 9 bit. If you have troubles consider upping it 12. Ups the delay giving the IC more time to process the temperature measurement
	#END

		sensors.requestTemperatures(); // Send the command to get temperatures
	  ${variable_ky_001_temp_value} = sensors.getTempCByIndex(0);
	
    `;
    return code;
  };