Blockly.Blocks['ky_001_temp_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("KY-001 TEMP");
    this.appendValueInput("KY_001_TEMP_DATA_PIN")
        .setCheck("Number")
        .appendField("DATA PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};