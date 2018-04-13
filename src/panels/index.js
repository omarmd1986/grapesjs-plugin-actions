import {cmdClear, cmdImport} from '../consts';

export default (editor, config = {}) => {
    var panelManager = editor.Panels;

    // Undo button
    panelManager.addButton('options', {
        id: 'undoBtn',
        className: 'fa fa-undo',
        command: e => e.runCommand('core:undo'),
        attributes: {title: config.undoBtnTitle}
    });

    // Undo button
    panelManager.addButton('options', {
        id: 'redoBtn',
        className: 'fa fa-repeat',
        command: e => e.runCommand('core:redo'),
        attributes: {title: config.redoBtnTitle}
    });

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
