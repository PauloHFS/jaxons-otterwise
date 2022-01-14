import supabase from '../providers/supabase-cliente';

const getAllShoes = async () => {
  const { data: Shoes, error } = await supabase.from('shoe').select('*');
  if (error) console.error(error);
  return Shoes;
};

const getAllLikes = async () => {
  const { data, error } = await supabase
    .from('liked_shoe')
    .select('*')
    .eq('user_name', 'paulo_hernane');
  if (error) console.error(error);
  return data;
};

const setLikeAs = async (likeState, liked_id, shoe_id) => {
  const { data, error } = await supabase.from('liked_shoe').upsert({
    id: liked_id,
    shoe_id: shoe_id,
    user_name: 'paulo_hernane',
    is_liked: likeState,
  });
  if (error) console.error(error);
  return data;
};

const isShoeLiked = async shoe_id => {
  const { data, error } = await supabase
    .from('liked_shoe')
    .select('*')
    .eq('user_name', 'paulo_hernane')
    .eq('shoe_id', `${shoe_id}`);
  if (error) console.error(error);
  return data;
};

export { getAllShoes, setLikeAs, isShoeLiked, getAllLikes };
