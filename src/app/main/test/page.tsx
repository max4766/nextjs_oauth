import ResultShow from "@/components/resultShow";

async function getData() {
  try{
    const response = await fetch('https://dummyjson.com/c/3029-d29f-4014-9fb4', { cache: 'no-store' });
    // const response = await fetch('https://portal.ringonservice.com/api/abp/api-definition', { cache: 'no-store' });
    
    if(!response.ok){
      return null;
    }

    const data = await response.json();
    return data;
  }catch{
    return null
  }
}

export default async function TestPage() {
  const data = await getData();

  return (
    <ResultShow data={data}></ResultShow>
  );
}