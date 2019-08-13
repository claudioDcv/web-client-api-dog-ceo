export default data => {
    if (data.status === 'success') return data.message;
    return {};
};