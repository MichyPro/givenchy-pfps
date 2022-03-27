client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.get("954438656385511474");
    channel.send({
      files: [member.user.displayAvatarURL({ dynamic: true })]
    });
  });