export type CommandData = {
    command: string,
    args: string[],
    raw: string,
};

export const parse = (rawCommand: string): CommandData => {
    const args = rawCommand.split(' ');
    const command = args.shift() || '';
    return {
        command,
        args,
        raw: rawCommand,
    };
};
