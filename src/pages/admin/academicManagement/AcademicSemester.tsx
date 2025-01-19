import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data, isLoading } = useGetAllSemestersQuery({});

  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
