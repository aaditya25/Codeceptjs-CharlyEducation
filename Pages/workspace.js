const { I } = inject();

module.exports = {

  fields: {

    //for workspace
    workspace_button: '#layout_sidenav_material',
    workspaceview: '.welcomeMessage_welcome_3HJGdl4NAXGj80roVXIC4N',

    //For sorting
    dropdown_menu: '//*[@id="root"]/div[3]/div/div[2]/div/div[2]/div/div[1]/div[2]/button',
    creation_date: '//*[@id="modal-root"]/div/div/div/div[2]',
    a_z:'//*[@id="modal-root"]/div/div/div/div[1]', 


    //for PDF
    uploadpdf: '#material_upload_button',
    upload_file: 'input[type=file]',
    upload_succeed: 'Upload succeeded.',
    confirm_upload: '.upload-component_uploadInfoActionButtons_3uhyqIcJhjaiMRzRFOE39W',

    //for flashcard
    flashcards: '#material_create_deck_button',
    name_deck: '.input-component_input_BgrSa4LC7r36z21c9cRPv',
    submit: '.createNewDocForm_submitButton_20JnRYBiMGFEDZULg2YaI9',
    deck_title: '.flashcards_deckTitle_1E6u86zxOTE1OqEDcVd69k',
    sideA: '#A_new > div > p',
    sideB: '#B_new > div > p',
    save: '.button-component_primary_2OXCKThnf4qtXQwOV-6pxu',
    count: '.flashcards_deckTitle_1E6u86zxOTE1OqEDcVd69k',

  },
}