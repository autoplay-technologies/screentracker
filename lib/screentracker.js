function logScreenChange(params) {
    console.log(params.screen_id);
    const now = Math.floor(Date.now()/1000);
    return {
        created_at: now,
    };
}