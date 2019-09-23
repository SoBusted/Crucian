const math = require('mathjs');

module.exports.run = async (bot, message, args) => {
    if (args.length < 1) {
        message.reply(bot.lang.lackOfArguments);

        return;
    }

    let input = args.join(' '),
        output;

    try {
        output = math.evaluate(input);
    } catch (e) {
        message.reply(bot.lang.invalidCalculation);

        return;
    }

    message.channel.send(bot.lang.calcResult.format(input, output));
};

module.exports.config = {
    name: 'calc',
    description: 'Calculate simple math questions',
    alias: ['answer', 'calculate', 'solve', '계산', '계산기', '답', '풀어'],
    cooltime: 1000,
    isOwnerOnly: false
};