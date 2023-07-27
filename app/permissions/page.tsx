import { CheckMark } from '@/assets/svg/icons';
import OverView from '@/components/common/overview/overviews';
import MainNavbar from '@/components/main-navbar/main-navbar';
import SubHeader from '@/components/sub-header';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PermissõesRoutes } from '@/constant/data';
import { AiOutlinePlusCircle } from 'react-icons/ai';
const Permissions = () => {
  return (
    <>
      <div className=" space-y-5 ">
        <MainNavbar title="Permissões" />

        <div className="  space-y-5">
          <OverView />
          <SubHeader
            href="permissions"
            buttonsData={PermissõesRoutes}
            name="Excluir grupo"
          />
          <div className=" grid  gap-6 lg:gap-10 pt-6 lg:grid-cols-2">
            <div>
              <div className=" p-5 inline-flex items-center gap-2">
                <h2 className=" text-2xl lg:text-4xl">
                  Permissões de um Grupo
                </h2>
                <CheckMark />
              </div>
              <div className=" space-y-4 bg-white rounded-2xl p-5 lg:p-8">
                <h3 className=" text-4xl">Adicione permissões de um grupo</h3>
                <Select>
                  <SelectTrigger className=" min-w-full w-full">
                    <SelectValue placeholder="Selecione o grupo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecione o grupo</SelectLabel>
                      <SelectItem value="us">US</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="bd">BD</SelectItem>
                      <SelectItem value="ind">IND</SelectItem>
                      <SelectItem value="sl">SL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className=" pt-5">
                  <Button
                    className="  gap-2 text-base !lg:text-4xl font-semibold"
                    variant={'secondary'}
                  >
                    <AiOutlinePlusCircle size={20} />
                    Adicionar
                  </Button>
                </div>
              </div>
            </div>
            {/* Bloquear grupo */}
            <div>
              <div className=" p-5 inline-flex items-center gap-2">
                <h2 className=" text-2xl lg:text-4xl">Bloquear grupo</h2>
                <CheckMark />
              </div>
              <div className=" space-y-4 bg-white rounded-2xl p-5 lg:p-8">
                <h3 className=" text-4xl">Bloqueie permissões de um grupo</h3>
                <Select>
                  <SelectTrigger className=" min-w-full w-full">
                    <SelectValue placeholder="Selecione o grupo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Selecione o grupo</SelectLabel>
                      <SelectItem value="us">US</SelectItem>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="bd">BD</SelectItem>
                      <SelectItem value="ind">IND</SelectItem>
                      <SelectItem value="sl">SL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <div className=" pt-5">
                  <Button
                    className="  gap-2 text-base !lg:text-4xl font-semibold"
                    variant={'secondary'}
                  >
                    <AiOutlinePlusCircle size={20} />
                    Selecionar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Permissions;
