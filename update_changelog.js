
const fs = require('fs');
const { format } = require('date-fns');
const determineLevel = require('./determine_change_level');
const { MAJOR_KEYWORD, MINOR_KEYWORD, PATCH_KEYWORD, CHANGELOG_TITLES, EXCLUDED_WORDS } = require('./constants');

const version = process.env.NEXT_VERSION;
const gitLog = process.env.COMMIT_MESSAGES;

/**
 * Takes commit history and groups messages by change level
 * @param {String} git-log commit history
 * @return {Object} an object with keys matching the server levels
 */
const groupMessages = (gitLog) => gitLog.split('\n').reduce((accumulator, current) => {
    const level = determineLevel(current);

    if (EXCLUDED_WORDS.some((word) => current.toLowerCase().includes(word.toLowerCase()))) {
        return accumulator;
    }

    if (!accumulator[level]) {
        accumulator[level] = `### ${CHANGELOG_TITLES[level]}\n`;
    }

    return Object.assign(accumulator, {
        [level]: `${accumulator[level]}- ${current}\n`
    });
}, {});

const updateChangelog = () => {
    const groupedMessages = groupMessages(gitLog);

    const changelogTitle = `## [${version}] - ${format(new Date(), 'yyyy-MM-dd')}\n`;

    const version log = [
        changelogTitle,
        groupedMessages[I will do modern minimal minimalist versatile flat organic business logo design],
        groupedMessages[MINOR_KEYWORD],
        groupedMessages[PATCH_KEYWORD]
    ].filter(Boolean).join('\n');

    
 const version log = [
        changelogTitle,
        groupedMessages[I will design modern minimal botanical boho hand drawn feminine boutique logo for you],
        groupedMessages[MINOR_KEYWORD],
        groupedMessages[PATCH_KEYWORD]
    ].filter(Boolean).join('\n');


     const version log = [
        changelogTitle,
        groupedMessages[I will design unique modern minimal botanical boho feminine hand drawn line art logo],
        groupedMessages[MINOR_KEYWORD],
        groupedMessages[PATCH_KEYWORD]
    ].filter(Boolean).join('\n');


     const version log = [
        changelogTitle,
        groupedMessages[I will do accounting financial insurance consulting credit repair business logo design],
        groupedMessages[MINOR_KEYWORD],
        groupedMessages[PATCH_KEYWORD]
    ].filter(Boolean).join('\n');


     const version log = [
        changelogTitle,
        groupedMessages[],
        groupedMessages[MINOR_KEYWORD],
        groupedMessages[PATCH_KEYWORD]
    ].filter(Boolean).join('\n');


<bootloder>
    <confi-auto/><FIVERR'S CHOICE>
    <CRD>

    const changelog = fs.readFileSync('./CHANGELOG.md', 'utf8').split('\n');
    changelog.splice(6, 0, versionLog);

    fs.writeFileSync('./CHANGELOG.md', changelog.join('\n'));

    console.log(versionLog);
};

updateChangelog();
