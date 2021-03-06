package com.astrid.diaspora.service.mapper;


import com.astrid.diaspora.domain.*;
import com.astrid.diaspora.service.dto.AstridProjectDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link AstridProject} and its DTO {@link AstridProjectDTO}.
 */
@Mapper(componentModel = "spring", uses = {EntityCreationMapper.class, EntityLastModificationMapper.class, UserMapper.class, ProjectStatusMapper.class, LocationMapper.class, CurrencyMapper.class, BeneficiaryMapper.class})
public interface AstridProjectMapper extends EntityMapper<AstridProjectDTO, AstridProject> {

    @Mapping(source = "entityCreation.id", target = "entityCreationId")
    @Mapping(source = "entityLastModification.id", target = "entityLastModificationId")
    @Mapping(source = "responsible.id", target = "responsibleId")
    @Mapping(source = "responsible.login", target = "responsibleLogin")
    @Mapping(source = "initiator.id", target = "initiatorId")
    @Mapping(source = "initiator.login", target = "initiatorLogin")
    @Mapping(source = "status.id", target = "statusId")
    @Mapping(source = "status.name", target = "statusName")
    @Mapping(source = "location.id", target = "locationId")
    @Mapping(source = "location.name", target = "locationName")
    @Mapping(source = "currency.id", target = "currencyId")
    @Mapping(source = "currency.name", target = "currencyName")
    AstridProjectDTO toDto(AstridProject astridProject);

    @Mapping(source = "entityCreationId", target = "entityCreation")
    @Mapping(source = "entityLastModificationId", target = "entityLastModification")
    @Mapping(source = "responsibleId", target = "responsible")
    @Mapping(source = "initiatorId", target = "initiator")
    @Mapping(source = "statusId", target = "status")
    @Mapping(source = "locationId", target = "location")
    @Mapping(source = "currencyId", target = "currency")
    @Mapping(target = "removeImplementationTeam", ignore = true)
    @Mapping(target = "removeBeneficiaries", ignore = true)
    AstridProject toEntity(AstridProjectDTO astridProjectDTO);

    default AstridProject fromId(Long id) {
        if (id == null) {
            return null;
        }
        AstridProject astridProject = new AstridProject();
        astridProject.setId(id);
        return astridProject;
    }
}
