import {cmdClear, cmdImport} from '../consts';

export default (editor, config = {}) => {
    var panelManager = editor.Panels;

    // Import button
    panelManager.addButton('options', {
        id: 'importBtn',
        className: 'fa fa-upload',
        command: cmdImport,
        attributes: {title: config.importBtnTitle}
    });

    // Clean button
    panelManager.addButton('options', {
        id: 'cleanBtn',
        className: 'fa fa-trash',
        command: cmdClear,
        attributes: {title: config.cleanBtnTitle}
    });
}
