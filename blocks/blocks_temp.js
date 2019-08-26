Blockly.Blocks["ky_001_temp_block"] = {
    init: function() {
      this.appendDummyInput().appendField("KY-001 TEMP");
      this.appendDummyInput()
        .appendField("PIN")
        .appendField(new Blockly.FieldTextInput("0"), "KY_001_TEMP_PIN")
        .appendField("SET TO")
        .appendField(
          new Blockly.FieldVariable("KY_001_TEMP_VALUE"),
          "KY_001_TEMP_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };